const fs = require("fs-extra"); 
const child_process = require("child_process");
const path = require('path');

function publishCourses() {
    try{
        var files = fs.readdirSync(path.join(__dirname,'playbooks'));
        child_process.spawnSync(`bash buildRun.sh -e katacoda`,{ shell: true, cwd: path.join(__dirname,'tutorial-compiler'), encoding: 'utf-8' });
        files.forEach(function(file, index){
                if(file.includes("pathway")){
                    var coursesJson = JSON.parse(fs.readFileSync(path.join(__dirname,'playbooks', file)));
                    var courses = coursesJson.courses;
                    var srcDir = path.join(__dirname,'tutorial-compiler','build','output','katacoda');
                    var destDir = path.join(__dirname, file.replace('-pathway.json', ''));
                    if(fs.existsSync(destDir)){
                        fs.rmSync(destDir, { recursive: true })
                    }
                    fs.mkdir(path.join(__dirname, destDir));
                    fs.copyFile(path.join(__dirname,'tutorials', file), path.join(__dirname, file));
                    for(var i = 0; i < courses.length; i++){
                        console.log('Copy', courses[i].course_id);
                        fs.copySync(path.join(srcDir, courses[i].course_id), path.join(destDir, courses[i].course_id));
                    }
                }
        });
    }
    catch(e) {
        console.error(e);
    }
}

publishCourses()