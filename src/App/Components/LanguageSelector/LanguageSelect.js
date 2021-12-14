import hook from "./hook"

export default () => {
    const { t, changeLanguage } = hook()
    return (
        <div className="d-flex ">
            <button onClick={() => changeLanguage("en")}>en</button>
            <button onClick={() => changeLanguage("am")}>am</button>
            <button onClick={() => changeLanguage('ru')}>ru</button>


        </div>
    )
}