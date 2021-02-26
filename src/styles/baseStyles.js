let appBackground = {
    backgroundColor : '#EAE3EA', 
    padding: 5, 
    margin: 20,
    borderRadius: 15,
}

let navbar = {
    textAlign: 'center', 
    backgroundColor: '#5CDB95', 
    height: 75, 
    marginTop: 0,
}

let appName = {
    color: 'darkblue', 
    position: 'absolute', 
    left: 15, 
    top: 17, 
    fontSize: 30, 
    fontFamily: 'arial'
}

let navLink = {
    textDecoration: 'none', 
    marginRight: 15
}

let navLinkContainer  = {
    position: 'absolute', 
    right: 15, 
    top: 25,
}
let landingPage = {
    padding: 20,
    paddingLeft: 85,
    display: 'flex', 
    flexWrap: 'wrap',
    flexDirection: 'row',
}

let baseStyles = {
    navbar : navbar,
    appName : appName,
    navLink : navLink,
    navLinkContainer : navLinkContainer,
    landingPage : landingPage,
    appBackground : appBackground,
}

export default baseStyles;