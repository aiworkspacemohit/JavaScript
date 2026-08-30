//for each loop

const coding = ['js', 'ruby', 'java', 'python', 'swift']
 
coding.forEach( function (item){
    console.log(item);
})

console.log()
function printMe(item){
    console.log(item);
}

coding.forEach(printMe);

coding.forEach((item, index, arr) => {
    console.log(item, index, arr);
})
//output:
// js 0 [ 'js', 'ruby', 'java', 'python', 'swift' ]
// ruby 1 [ 'js', 'ruby', 'java', 'python', 'swift' ]
// java 2 [ 'js', 'ruby', 'java', 'python', 'swift' ]
// python 3 [ 'js', 'ruby', 'java', 'python', 'swift' ]
// swift 4 [ 'js', 'ruby', 'java', 'python', 'swift' ]

const mycoding =[
    {
        languageName : "javascript",
        languageFileName: "js"
    },
    {
        languageName : "java",
        languageFileName: "java"
    },
    {
        languageName : "python",
        languageFileName: "py"
    }
]

mycoding.forEach((item) => {
    console.log(item.languageName);
})  
// output :
// javascript
// java
// python