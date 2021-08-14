export function snapshotToArray(snapshot) {
    let data = [];
    snapshot.forEach((element) => {
        var value = element.val();
        data.push(value);
    });
    return data;
}

export function getWordCloudData(data) {
    data.forEach(cleanupStr);
    let words = [];
    let WordCloudFormat = [];
    data.forEach(element => {
        let str = element.toString();
        let myArr = str.split(" ");
        myArr.forEach(each => {
            if (each !== 'of' &&
                each !== 'in' &&
                each !== 'at' &&
                each !== 'Get' &&
                each !== 'a' &&
                each !== 'Camp' &&
                each !== 'an' &&
                each !== 'Go' &&
                each !== 'Northern' &&
                each !== 'Road' &&
                each !== 'through' &&
                each !== 'on' &&
                each !== 'Visit' &&
                each !== 'the' &&
                each !== 'Be' &&
                each !== 'yourself' &&
                each !== 'Walk' &&
                each !== 'to' &&
                each !== 'Square' &&
                each !== 'Enjoy' &&
                each !== 'de' &&
                each !== 'City') {
                words.push(each);
            }
        })
    });

    words.push('From');
    //console.log(words);

    let wordCounts = {}
    words.forEach(element => {
        wordCounts[element] = 0;
    })
    words.forEach(element => {
        wordCounts[element]++;
    })

    const keys = Object.keys(wordCounts);
    /*NEED TO SORT KEYS TO BE USED LATER FOR TOP 20? */

    let sortable = [];
    keys.forEach(each => {
        sortable.push([each, wordCounts[each]]);
    })

    sortable.sort(function (a, b) {
        return b[1] - a[1];
    });

    sortable.forEach(element => {
        if (element[1] > 1) {
            let obj = {
                text: `${element[0]}`,
                value: wordCounts[element[0]],
            }
            WordCloudFormat.push(obj);
        }
    })


    //console.log(WordCloudFormat);
    return WordCloudFormat;
}

const cleanupStr = (item, index, arr) => {
    const a = 'àáâäæãåāăąçćčđďèéêëēėęěğǵḧîïíīįìłḿñńǹňôöòóœøōõőṕŕřßśšşșťțûüùúūǘůűųẃẍÿýžźż·/_,:;✦✧-';
    const b = 'aaaaaaaaaacccddeeeeeeeegghiiiiiilmnnnnoooooooooprrsssssttuuuuuuuuuwxyyzzz------...';
    const p = new RegExp(a.split('').join('|'), 'g');

    arr[index] = item.toString()
        .replace(p, c => b.charAt(a.indexOf(c))) // Replace special characters
        .replace("/[^A-Za-z0-9 ]/", '')
        .replace(/&/g, '-and-') // Replace & with 'and'
        .replace(/\-\-+/g, '-') // Replace multiple - with single -
        .replace(/[0-9]/g, '')
        .replace(/\./g, "")
        .trim();
}