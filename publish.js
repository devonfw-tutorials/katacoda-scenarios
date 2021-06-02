const path = require('path');
const fs = require('fs-extra');
const child_process = require("child_process");

const SCENARIOS = path.join(process.argv[2], 'repo');
const PLAYBOOKS = path.join(process.argv[2], 'playbooks');
const COMPILER = path.join(process.argv[2], 'compiler');

const TEMP = path.join(process.argv[2], 'temp');
const TEMP_COURSES = path.join(process.argv[2], 'temp', 'courses');
const TEMP_FILES = path.join(process.argv[2], 'temp', 'scenarios');

let usedScenarios = new Array();
let folderNames = new Array();

function publish(){
    console.log("Scenarios", SCENARIOS);
    console.log("Playbook", PLAYBOOKS);
    console.log("compiler", COMPILER);
    try{

        
        const SPECIFIED_COURSES = getCourses(PLAYBOOKS);
        const SPECIFIED_SCENARIOS = getScenarios(PLAYBOOKS); 
        //create temp directories 
        createFolder(TEMP); 
        createFolder(TEMP_COURSES); 
        createFolder(TEMP_FILES);

        //TODO UPDATE changed course files only
        updateCourseFiles();

        //TODO GENERATE changed tutorials only
        //generateNewScenarios();
        
        //TODO UPDATE changed courses only
        SPECIFIED_COURSES.forEach(course =>{
            createCourse(course);
        });

        //TODO UPDATE changed scenarios only
        SPECIFIED_SCENARIOS.forEach( scenario => {
            if(! usedScenarios.includes(scenario)){
                createScenarios(scenario);
            }
        });
        
        cleanUp();
        fs.copySync(TEMP_COURSES, SCENARIOS + "/.");
        fs.copySync(TEMP_FILES, SCENARIOS + "/.");

        const GENERATED_SCENARIOS = getScenarios(path.join(COMPILER, 'build', 'output', 'katacoda'));

        console.log(GENERATED_SCENARIOS);
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
        }
    });
}

function generateNewScenarios(){
    let cp = child_process.spawnSync(`bash buildRun.sh -e katacoda`, { shell: true, cwd: COMPILER, encoding: 'utf-8' });
    if(!fs.existsSync(path.join(COMPILER, 'build', 'output', 'katacoda'))) {
        console.log(cp);
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
            console.log(cp);
            return "";
        }
        if(!usedScenarios.includes(scenario.course_id)){
            usedScenarios.push(scenario.course_id);
        }
    });
    console.log(usedScenarios);
}

function createScenarios(scenario){
    const genScenariosDir = path.join(COMPILER, 'build', 'output', 'katacoda');
    folderNames.push(scenario);
    fs.copySync(path.join(genScenariosDir, scenario), path.join(TEMP_FILES, scenario));
}

function cleanUp(){
    const ONLINE_COURSES = getCourses(SCENARIOS); 
    const ONLINE_SCENARIOS = getScenarios(SCENARIOS);

    ONLINE_COURSES.forEach(coursefile => {
        course = coursefile.replace('-pathway.json');
        if(! folderNames.includes(course)){
            fs.removeSync(path.join(SCENARIOS, course) ,{ recursive: true })
        }
    });

    ONLINE_SCENARIOS.forEach(scenario => {
        if(! folderNames.includes(scenario)){
            fs.removeSync(path.join(SCENARIOS, scenario) ,{ recursive: true })
        }
    });
}


function getScenarios(dirname){
    let folders = fs.readdirSync(dirname, { withFileTypes: true }).filter(dirent => dirent.isDirectory());
    let scenarios = new Array();
    folders.forEach(folder => {
        if(!folder.name.includes('git') && !folder.name.includes('node_modules')){
            scenarios.push(folder.name)
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
}

publish();