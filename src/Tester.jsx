export default function Test(){
    let str = "Ram is a good boy".split("");

    let execute = ()=>{
        str.map((char)=>{
            console.log(char);
            console.log("+");
        });

    }

    return(
        <div>
        <button onClick={execute}>check</button>

        <h3>{str.map((char)=>{
            if(char === "a"){
                return <span style={{color:"blue"}}>{char}</span>
            }else{
                return <span>{char}</span>
            }
        })}</h3>
        </div>
    )
}