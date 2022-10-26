export const BoilingWater = (props) => {

    if (props.celsius >= 100){
     return <p> The water is boiling </p>;
    } else {
      return <p> The water will not boil</p>
    }
}