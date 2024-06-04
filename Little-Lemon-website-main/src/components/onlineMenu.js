import Card from "./Card"
import saladImg from "../assets/salad.jpg";
import classes from "./Hightlights.module.css";
export default function OnlineMenu(){
    return (
      <div style={{display:"flex", flexDirection:"row", gap:"10px",  margin:"50px", justifyContent:"center", paddingLeft:"50px", backgroundColor:"#eaeaea", padding:"30px", maxWidth:"100%", flexWrap:"wrap"}}>
      {[...Array(10)].map((_,index) => (
        <Card
        key={index}
        image={saladImg}
        name="Greek Salad"
        title="Greek Salad"
        price="$16.99"
        description="A traditional Greek salad consists of sliced cucumbers, tomatoes, green bell pepper, red onion, olives, and feta cheese."
      />
      ))}

      </div>
    )
  }
