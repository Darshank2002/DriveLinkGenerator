const Download = (FileLink) => {
  
    var list1= FileLink.split("/")
    var FileID = list1[5]
    var mode = list1[3]

    var doc = (id) => `https://docs.google.com/document/d/${id}/export?format=docx`
    var excel = (id) =>  `https://docs.google.com/spreadsheets/d/${id}/export?format=xlsx`
    var ppt = (id) => `https://docs.google.com/presentation/d/${id}/export/pptx`

    var dltemp= "https://drive.google.com/uc?export=download&id=";
    var downloadLink = dltemp + FileID ; 

    if (list1[2] === "drive.google.com"){
      return([downloadLink,'success']) 
    }
    else if(list1[2]==="docs.google.com"){
        switch (mode) {
          case 'document':
            return([doc(FileID),'success'])
          case 'spreadsheets':
            return([excel(FileID),'success'])
          case 'presentation':
            return([ppt(FileID),'success'])  
          default:
            break;
        }
    }
    else{
        return([FileLink,'danger'])
    }
    
    
    }
    export default Download;