export function Button({
                           text,
                           isDisabled,
                           onClick
                       }) {

    return (
        <button onClick={() => onClick(text)} type="button"
                disabled={isDisabled}>{text}
        </button>
    );
}