export default function Button({children, display="Primary", onClick, ...props}) {
    const buttonStyles = {
      Primary: "primary-button",
      Secondary: "secondary-button",
      Text: "text-button"
    };

    return (
      <button className={buttonStyles[display]} onClick={onClick} {...props}>
        {children}
      </button>
    );
}