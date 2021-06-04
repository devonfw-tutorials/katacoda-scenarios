const path = require('path');
const fs = require('fs-extra');
const child_process = require("child_process");

const SCENARIOS = path.join(process.argv[2], 'repo');
const COMPILER = path.join(process.argv[2], 'compiler');
const PLAYBOOKS = path.join(COMPILER, 'playbooks');

const TEMP = path.join(process.argv[2], 'temp');
const TEMP_COURSES = path.join(process.argv[2], 'temp', 'courses');
const TEMP_FILES = path.join(process.argv[2], 'temp', 'scenarios');

let usedScenarios = new Array();
let folderNames = new Array();

function publish(){
    try{

        
        const SPECIFIED_COURSES = getCourses(PLAYBOOKS);
        const SPECIFIED_SCENARIOS = getScenarios(PLAYBOOKS); 

        //create directories to save temp courses and scenarios 
        createFolder(TEMP); 
        createFolder(TEMP_COURSES); 
        createFolder(TEMP_FILES);

        //TODO UPDATE changed course files only
        //ISSUE #24
        updateCourseFiles();

        //TODO GENERATE changed tutorials only
        //ISSUE #25
        generateNewScenarios();
        
        //TODO UPDATE changed courses only
        //ISSUE #26
        SPECIFIED_COURSES.forEach(course =>{
            createCourse(course);
        });

        //TODO UPDATE changed scenarios only
        //ISSUE #27
        SPECIFIED_SCENARIOS.forEach( scenario => {
            if(! usedScenarios.includes(scenario)){
                createScenario(scenario);
            }
        });
        
        //Delete unused and newly generated tutorials 
        cleanUp();
        fs.copySync(TEMP_COURSES, SCENARIOS + "/.");
        fs.copySync(TEMP_FILES, SCENARIOS + "/.");

        let NEW_ONLINE_COURSES = getCourses(SCENARIOS);
        let NEW_ONLINE_SCENARIOS = getScenarios(SCENARIOS);
        console.log("ALL COURSES", NEW_ONLINE_COURSES)
        console.log("ALL SCENARIO- AND COURSE-FOLDERS", NEW_ONLINE_SCENARIOS);
    }

    catch(e) {
        console.error(e);
        return -1;
    }

}

function updateCourseFiles(){
    const ONLINE_COURSES = fs.readdirSync(SCENARIOS, { withFileTypes: true }).filter(dirent => dirent.isFile());
    const SPECIFIED_COURSES = fs.readdirSync(PLAYBOOKS, { withFileTypes: true }).filter(dirent => dirent.isFile());

    ONLINE_COURSES.forEach(course => {
        if(course.name.includes('-pathway')){
            fs.removeSync(path.join(SCENARIOS, course.name));
        }
    });

    SPECIFIED_COURSES.forEach(course => {
        if(course.name.includes('-pathway')){
            fs.copyFile(path.join(PLAYBOOKS, course.name), path.join(SCENARIOS, course.name));
            console.log(course.name, 'updated.' );
        }
    });
}

function generateNewScenarios(){
    let cp = child_process.spawnSync(`bash buildRun.sh -e katacoda`, { shell: true, cwd: COMPILER, encoding: 'utf-8' });
    if(!fs.existsSync(path.join(COMPILER, 'build', 'output', 'katacoda'))) {
        console.log("ERROR[generateNewScenarios]: ", cp);
        return "";
    }
}

function createCourse(coursefile){
    //create course folder
    let courseDirName = coursefile.replace("-pathway.json", '');
    createFolder(path.join(TEMP_COURSES, courseDirName));
    folderNames.push(courseDirName);

    //parse scenario names
    const genScenariosDir = path.join(COMPILER, 'build', 'output', 'katacoda');
    let rawData = fs.readFileSync(path.join(SCENARIOS, coursefile));
    let courseJson = JSON.parse(rawData);

    courseJson.courses.forEach(scenario => {
        fs.copySync(path.join(genScenariosDir, scenario.course_id), path.join(TEMP_COURSES, courseDirName, scenario.course_id));
        if(!fs.existsSync(path.join(TEMP_COURSES, courseDirName, scenario.course_id))) {
            console.log('Copying', scenario.course_id, 'to', courseDirName, 'failed');
            return "";
        }
        if(!usedScenarios.includes(scenario.course_id)){
            usedScenarios.push(scenario.course_id);
        }
    });

    console.log(courseDirName, 'created in temporory directory.' );
    
}

function createScenario(scenario){
    const genScenariosDir = path.join(COMPILER, 'build', 'output', 'katacoda');
    folderNames.push(scenario);
    fs.copySync(path.join(genScenariosDir, scenario), path.join(TEMP_FILES, scenario));

    console.log(scenario, 'created in temporory directory.' );
}

function cleanUp(){
    const ONLINE_COURSES = getCourses(SCENARIOS); 
    const ONLINE_FOLDERS = getScenarios(SCENARIOS);

    ONLINE_COURSES.forEach(coursefile => {
        course = coursefile.replace('-pathway.json');
        if(! folderNames.includes(course)){
            fs.removeSync(path.join(SCENARIOS, course), { recursive: true });
            console.log(course, "doesn't exist anymore in the tutorials repository." );
        }
    });

    ONLINE_FOLDERS.forEach(scenario => {
        if(! folderNames.includes(scenario)){
            fs.removeSync(path.join(SCENARIOS, scenario), { recursive: true });
            console.log(scenario, "doesn't exist anymore in the tutorials repository." );
        }
    });

    //TODO Filter only newly generated folders
    //ISSUE #25 #26
    ONLINE_FOLDERS.forEach(scenario => {
        if(fs.existsSync(path.join(SCENARIOS, scenario))){
            fs.removeSync(path.join(SCENARIOS, scenario), { recursive: true });
            console.log(scenario, "removed to replace it with build." );
        }
    });


}


function getScenarios(dirname){
    let folders = fs.readdirSync(dirname, { withFileTypes: true }).filter(dirent => dirent.isDirectory());
    let scenarios = new Array();
    folders.forEach(folder => {
        if(!folder.name.includes('git')){
            scenarios.push(folder.name);
        }
    });
    return scenarios;
}


function getCourses(dirname){
    let files = fs.readdirSync(dirname, { withFileTypes: true }).filter(dirent => dirent.isFile());
    let coursefiles = new Array();
    files.forEach(file => {
        if(file.name.includes("pathway")){
            coursefiles.push(file.name);
        }
    });
    return coursefiles;
}

function createFolder(dirname){
    if (fs.existsSync(dirname)){
        fs.removeSync(dirname); 
    }
    fs.mkdir(dirname);
    console.log(dirname, "was created.");
}

publish();