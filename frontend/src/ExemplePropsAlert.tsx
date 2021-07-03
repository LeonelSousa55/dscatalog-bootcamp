type Props = {
    text?: string;
}

const Alert = ({ text }: Props) => (
    <div className="alert alert-info">
        Hello {text}!
    </div>
)

export default Alert;