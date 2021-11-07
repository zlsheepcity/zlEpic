// ---------------------------------------------- examples

return (
  <div>
    <button onClick={showPost}>Show Posts</button>
    {show && <Post />}
  </div>
);


type  Human = {
  name: string;
  age: number;
}
let me: Human = {
  name: "Fernando Doglio",
  age: 37
}

// ---------------------------------------------- typescript

type myCallback = (error: Error|null, results: string) => void;
function myMainFN2(callback: myCallback) {
  let date = new Date();
  //your logic here...
  if(error) { //valid uses of callback
    callback(new Error("Something went terribly wrong, abort, abort!"), "");
  } else {
    callback(null, "This is fine");
  }
  //callback(date, "random string", 131412); - invalid because `date` is the wrong type and it also has 1 extra parameter
  //let i = callback("this other string"); - invalid because it's missing the first parameter
  //console.log(i, date, callback(123125091)) - invalid because we're calling it with the wrong parameter
}

// ---------------------------------------------- AbortController

  useEffect(() => {
    const controller = new AbortController();
    const signal = controller.signal;

      fetch("https://jsonplaceholder.typicode.com/posts", { signal: signal })
      .then((res) => res.json())
      .then((res) => setPosts(res))
      .catch((err) => {
        if (err.name === "AbortError") {
          console.log("successfully aborted");
        } else {
          setError(err);
        }
      });
    return () => controller.abort();
  }, []);

// ---------------------------------------------- component

/*
 - filter.svg
 - folder.svg
 - grade.svg
 - index.js
*/

// index

import { ReactComponent as Filter } from './filter.svg';
import { ReactComponent as Folder } from './folder.svg';
import { ReactComponent as Grade } from './grade.svg';

export default {
  Filter,
  Folder,
  Grade,
};

// use

import Icon from './index';

export default function IconList() {
  return (
    <div>
      <Icon.Filter style={{ color: 'hotpink' }} />
      <Icon.Folder style={{ color: 'orange' }} />
      <Icon.Grade style={{ color: 'mediumpurple' }} />
    </div>
  );
}
