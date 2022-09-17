const fs = require("fs");

let param = process.argv[2];

const firstTxt = param.substring(0, 1);
const UpperTxt = firstTxt.toUpperCase();
const ingerTxt = param.substring(1, param.length);
 
param = UpperTxt + ingerTxt

const fileName = param + ".jsx";

const targetPath = `./components/${fileName}`;

const targetContent = `
import React, { useState } from "react";
import styled from "styled-components";

const ${param} = () => {

    ////////////// STATE ///////////////

    ////////////// HOOKS ///////////////

    ///////////// EFFECT ///////////////

    //////////// HANDLER ///////////////


    return <div>${param}</div>
};

export default ${param};`;

//만약 그 파일이잇으면?

fs.readFile(targetPath, "utf-8", (error, description) => {

    if(error) {
        

        fs.writeFile(targetPath, targetContent, (error) => {


            if(error){
                console.error(error);
                console.log("❌ jsx파일 생성에 실패했습니다. ❌");
            }

        });


    } else {
        console.log("🍀Already Exist File. Can Not Make It!");
    }
});