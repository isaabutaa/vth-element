export default function LoginForm(props) {
    const {username, password, handleSubmit, handleChange, btnText} = props

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    name="username"
                    value={username}
                    placeholder="Username"
                    onChange={handleChange}
                />
                <input
                    type="text"
                    name="password"
                    value={password}
                    placeholder="Password"
                    onChange={handleChange}
                />
                <button>{btnText}</button>
            </form>
        </div>
    )
}