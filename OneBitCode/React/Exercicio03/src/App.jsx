import Profile from "./componentes/imageProfile";

export default function App(){
  return(
    <>
      <div className="app">
        <Profile 
          avatar ="https://i1.sndcdn.com/artworks-000126382567-xcryft-t1080x1080.jpg"
          name= "Eduardo"
          bio = "Developer Full-Stack"
          email= "eduardo@email.com"
          phone= "+55 19 999999999"
          githubUrl ="https://github.com"
          linkedinUrl ="https://linkedin.com"
          twitterUrl ="https://twitter.com"
        />
        

      </div>
    </>
  )
}