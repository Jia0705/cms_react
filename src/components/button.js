function Button(props) {
    const { color, label = "Click", onClick } = props;
    let btnClass = "btn";
    if (color === "red") {
      btnClass += " btn-danger"; // btn btn-danger
    } else if (color === "green") {
      btnClass += " btn-success"; // btn btn-success
    } else if (color === "blue") {
      btnClass += " btn-info"; // btn btn-info
    } else if (color === "black") {
      btnClass += " btn-dark"; // btn btn-dark
    }
  
  
    return (
      <button className={btnClass} onClick={onClick}>
        {label}
      </button>
    );
  }
  
  export default Button;
  