const fs = require('fs');

module.exports = {
    fileWritter: function(scores){

        jsonArray = []
    
        for(i = 0; i<100; i++){
            jsonArray.push({'x1':0,'y1':0,"InsideColor": "#ff00ff","OutsideColor": "#ff00ff"})
        }
    
        var i = 0;
        scores.forEach(element => {
    
            switch (element.score){
    
                case 1:
                    color = '#000000';
                    break;
                case 2:
                    color = '#1f3a93';
                    break;
                case 3:
                    color = '#019875';
                    break;
                case 4:
                    color = '#f7ca18';
                    break;
                case 6:
                    color = '#cf000f'
            };
    
            jsonArray[i] = {'x1':element.x,'y1':element.y,"InsideColor":color,"OutsideColor": color};
            i = i+1;
        });
    
        writeData = Object.assign({}, jsonArray);
    
        fs.writeFileSync('data/data.json', JSON.stringify(writeData, null, 4), 'utf8', function (err) {
    
            if (err) {
                console.log(err);
                throw err;
            };
        });
    }
}
