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
// explained cheatsheet
// https://blog.bitsrc.io/react-with-typescript-cheatsheet-9dd891dc5bfe

React.ChangeEvent<HTMLInputElement>
React.ChangeEvent<HTMLTextAreaElement>
React.ChangeEvent<HTMLSelectElement>
React.FormEvent<HTMLFormElement>
HTMLElement

type MyType = {
  somePrimitive: number,
  someArray: string[],
  someObject: {
    value: string,
    loaded: boolean
  },
  someObjectArray: {
    value: string
  }[],
  someOptions: "high" | "normal" | "low",
  someOptions2: 5 | 9 | 10,
  children: React.ReactNode,
  onChange: (target: string) => boolean, // accepts a parameter and has return type
  onClick: () => void, // function that returns nothing
  handleSubmit: (event: React.FormEvent<HTMLFormElement>) => void, // function that takes an event
  handleChange: (event: React.FormEvent<HTMLInputElement>) => void // function that takes an event
}

const App = ({ title, score }: MyType) => (
  <h1>{title} = {score}</h1>
)
const onChange = (e: React.FormEvent<HTMLInputElement>): void => {
  // e.currentTarget.value
}
const App = ({ children }: { children: React.ReactNode }) => {
  return <div>{children}</div>
}

// combo 1

type Props = {
  title: string
}
const App: React.FC<Props> = ({title}) => {
  return (
      <h1>{title}</h1>
  )
}
// Because of TypeScript’s inferred type feature, there’s no need for you to type React function components at all.
const App = ({ title }: Props) => <div>{title}</div>

// title is string or null
const [title, setTitle] = useState<string | null>(null)
// score is number or undefined
const [score, setScore] = useState<number | undefined>(undefined)

// return value

function useCustomHook() {
  return ["Hello", false] as const
} // Without the as const assertion, TypeScript will infer the returned values as (string | boolean)[] instead of [string, boolean]

// interface
// When you’re not sure which one to use, always go with interface until you see a reason to use type .

export interface CourseOverviewModalProps {
  modalShow: boolean;
  closeModal: () => void;
  course: Course;
  courseAdded: boolean;
  addCourse: () => void;
  startCourse: () => void;
}

// ---------------------------------------------- Controls

type ButtonProps = {
  children: React.ReactNode
  onClick: () => void
}
const Button = ({ children, onClick }: ButtonProps) => {
  return <button onClick={onClick}>{children}</button>
}


type ImgProps = React.ComponentPropsWithoutRef<"img">
type ButtonProps = React.ComponentPropsWithoutRef<"button">
interface MyImgProps extends React.ComponentPropsWithoutRef<"img"> {
  customProp: "primary" | "secondary";
}

const Img = ({ src, loading }: ImgProps) => {
  return <img src={src} loading={loading} />
}
const Button = ({ children, onClick, type }: ButtonProps) => {
  return (
    <button onClick={onClick} type={type}>
      {children}
    </button>
  )
}


// ---------------------------------------------- Submit Form

const App = () => {
  const [email, setEmail] = useState("")

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // handle submission here...
    alert(`email value: ${email}`)
  }

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>
          Email:
          <input
            type="email"
            name="email"
            onChange={(e) => setEmail(e.currentTarget.value)}
            // ^^^ onChange inferred as React.ChangeEvent
          />
        </label>
      </div>
      <div>
        <input type="Submit" value="Submit" />
      </div>
    </form>
  )
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
