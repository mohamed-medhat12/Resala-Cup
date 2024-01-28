const sheetID = '1v849e6vmZ8SHuOIYFmQwd77zBnE_ZnUcjyss5oEaNjE';
const base = `https://docs.google.com/spreadsheets/d/${sheetID}/gviz/tq?`;
var branch = localStorage.getItem("branch");
const sheetName = 'problems';
let qu = `Select * `;
const query = encodeURIComponent(qu);
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
 
function maker(json) {
    const div = document.createElement('div');
    div.style.display = 'grid';
    div.style.gridTemplateColumns = '100px 100px 100px 250px 100px';
    output.append(div);
    let first = true;
    json.forEach((el) => {
        //console.log(ele);
        const keys = Object.keys(el);
        if (first) {
            first = false;
            keys.forEach((heading) => {
                const ele = document.createElement('div');
                ele.textContent = heading.toUpperCase();
                ele.style.background = '#E2EFDA';
                ele.style.color = 'black';
                // ele.style.fontWeight='bold';
                ele.style.textAlign='center';
                div.append(ele);
            })
            
        }
        keys.forEach((key) => {
            const ele = document.createElement('div');
            ele.style.border = '1px solid #ddd';
            ele.textContent = el[key];
            ele.style.textAlign='center';
            ele.style.fontWeight=100;
            div.append(ele);
        })
        console.log(keys);
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
        keys.forEach((key) => {
            const ele = document.createElement('th');
            ele.style.border = '1px solid #ddd';
            ele.textContent = el[key];
            if(el[key]=='opened'){
                ele.style.color='green';
            }
            else if(el[key]=='closed'){
                ele.style.color='red'
            }
            ele.style.textAlign='center';
            ele.style.fontWeight='bold';
            row.append(ele);
        })
        row = document.createElement('tr');
        row.style.backgroundColor='#E2EFDA';
        dataSheet.append(row);
        console.log(keys);
    })
 
}