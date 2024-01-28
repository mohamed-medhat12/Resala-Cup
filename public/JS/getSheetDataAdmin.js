const sheetID = '1v849e6vmZ8SHuOIYFmQwd77zBnE_ZnUcjyss5oEaNjE';
const base = `https://docs.google.com/spreadsheets/d/${sheetID}/gviz/tq?`;
var branch = localStorage.getItem("branch");
console.log(typeof(branch));
const sheetName = 'problems';
let qu = `Select * `;
const query = encodeURIComponent('Select *');
const url = `${base}&sheet=${sheetName}&tq=${query}`;
const data = [];
document.addEventListener('DOMContentLoaded', init);
const d = new Date();
const output = document.querySelector('.output');
const dataSheet = document.getElementById('data-sheet');
function init() {
    console.log('ready');
    fetch(url)
        .then(res => res.text())
        .then(rep => {
            //console.log(rep);
            const jsData = JSON.parse(rep.substr(47).slice(0, -2));
            console.log(jsData);
            const colz = [];
            jsData.table.cols.forEach((heading) => {
                if (heading.label) {
                    colz.push(heading.label.toLowerCase().replace(/\s/g, ''));
                }
            })
            jsData.table.rows.forEach((main) => {
                //console.log(main);
                const row = {};
                colz.forEach((ele, ind) => {
                    //console.log(ele);
                    row[ele] = (main.c[ind] != null) ? main.c[ind].v : '';
                })
                data.push(row);
            })
            maker2(data);
        })
}
 
function maker2(json) {
    var row = document.createElement('tr');
    row.style.backgroundColor='#E2EFDA';
    row.style.backgroundColor='#E2EFDA';
    dataSheet.append(row);
    json.forEach((el) => {
        //console.log(ele);
        const keys = Object.keys(el);
        var i = 0;
        keys.forEach((key) => {
            const ele = document.createElement('th');
            
            ele.style.border = '1px solid #ddd';
            ele.textContent = el[key];
            if(el[key]=='opened'){
                ele.style.color='green';
            }
            else if(el[key]=='closed'){
                ele.style.color='red';
            }

            ele.style.textAlign='center';
            ele.style.fontWeight='bold';
            // if(i==5){
            //     const t=document.createElement('input');
            //     t.setAttribute('class','response');
            //     ele.append(t);
            // }
            row.append(ele);
            i+=1;
        })
        row = document.createElement('tr');
        row.style.backgroundColor='#E2EFDA';
        dataSheet.append(row);
        console.log(keys);
    })
 
}