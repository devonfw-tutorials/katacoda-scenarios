const fs = require("fs-extra"); 
const child_process = require("child_process");
const path = require('path')

function publishCourses() {
    var files = fs.readdirSync(path.join(__dirname,'playbooks'));
    try{
        child_process.spawnSync(`bash buildRun.sh -e katacoda`,{ shell: true, cwd: path.join(__dirname,'tutorial-compiler'), encoding: 'utf-8' });
        files.forEach(function(file, index){
                if(file.includes("pathway")){
                    var destDir = file.replace('-pathway.json', '');
                    var coursesJson = JSON.parse(fs.readFileSync(path.join(__dirname,'playbooks', file)));
                    var courses = coursesJson.courses;
                    fs.mkdir(destDir);
                    console.log(destDir);
                    var srcDir = path.join(__dirname,'tutorial-compiler','build','output','katacoda');
                    fs.copyFile(path.join(__dirname,'tutorials', file), path.join(file));
                    for(var i = 0; i < courses.length; i++){
                        console.log(courses[i].course_id);
                        fs.copySync(path.join(srcDir, courses[i].course_id), path.join(destDir,courses[i].course_id));
                    }
                }
        });
    }
    catch(e) {
        console.error(e);
    }
}

publishCourses()