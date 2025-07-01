import "../../styles/customButtom/CustomButton.css"; // Asegúrate de tener este archivo CSS

const CustomButton = ({ text = "Haz clic aquí", onClick }) => {
  return (
    <button className="custom-btn" onClick={onClick}>
      {text}
    </button>
  );
};

export default CustomButton;
