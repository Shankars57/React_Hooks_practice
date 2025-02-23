let Morning = ()=><h1>This is Morning</h1>
let Evening = ()=><h1>This is Evening</h1>
let Afternoon = ()=><h1>This is AfterNoon</h1>


const TimeOfDay = ({time}) => {
 if(time <=12 && time >= 0){
  return <Morning/>
 }
 else if(time > 12 && time < 18 ){
  return <Afternoon/>
 }
 else {return <Evening/>}
}

export default TimeOfDay
