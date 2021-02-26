let item = {
    paddingTop: 15,
    padding: 10,
    paddingBottom: 15,  
    borderRadius: 15, 
    marginBottom: 20,
    backgroundColor: 'snow',
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-evenly',
}

let image = {
    height: 100, 
    width: 100,
}

let summary = {
    backgroundColor: 'snow',
    textAlign: 'left',
    padding : 35,
    borderRadius: 20,
    marginLeft: 15,
    height: 125,
}

let container = {
    marginTop : 15, 
    marginLeft: 15, 
    display: 'flex', 
    flexDirection: 'row', 
    flexWrap: 'wrap', 
    justifyContent: 'space-evenly'
}

let description = {
    textAlign: 'left', 
    width: '50%',
    marginLeft: 10,
}

let costDetails = {
    marginLeft: 10,
    textAlign: 'right'
}
let cartReceiptStyles = {
    container : container,
    image : image,
    item : item,
    summary : summary,
    description: description,
    costDetails : costDetails,
}

export default cartReceiptStyles;