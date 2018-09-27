import React from 'react'
import {Route, Redirect} from 'react-router-dom'
export function loadFile(path, type){
  if (type==="js"){
    var fileref=document.createElement('script');
    fileref.setAttribute("type","text/javascript");
    fileref.setAttribute("src", path);
  }
  else if (type==="css"){
    var fileref=document.createElement("link");
    fileref.setAttribute("rel", "stylesheet");
    fileref.setAttribute("type", "text/css");
    fileref.setAttribute("href", path);
  }
  document.getElementsByTagName("head")[0].appendChild(fileref);
}

export function removejscssfile(filename, filetype){
    var targetelement=(filetype==="js")? "script" : (filetype==="css")? "link" : "none" //determine element type to create nodelist from
    var targetattr=(filetype==="js")? "src" : (filetype==="css")? "href" : "none" //determine corresponding attribute to test for
    var allsuspects=document.getElementsByTagName(targetelement)
    for (var i=allsuspects.length; i>=0; i--){ //search backwards within nodelist for matching elements to remove
    if (allsuspects[i] && allsuspects[i].getAttribute(targetattr)!==null && allsuspects[i].getAttribute(targetattr).indexOf(filename)!==-1)
        allsuspects[i].parentNode.removeChild(allsuspects[i]) //remove element by calling parentNode.removeChild()
    }
}
export function PrivateRoute ({component: Component, authed, ...rest}) {
  return (
    <Route
      {...rest}
      render={(props) => authed === true
        ? <Component {...props} />
        : <Redirect to={{pathname: '/login', state: {from: props.location}}} />}
    />
  )
}