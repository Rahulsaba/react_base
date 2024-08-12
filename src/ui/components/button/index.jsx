import { Loader , ButtonLoader } from "@/path"

export default function Button({ Children ,button_css , loading}) {
    return (
        <>
            <button className={`btn_primary ${button_css}`} aria-label={Children}>
                {
                  loading ? <ButtonLoader/> : Children
                }
            </button>
        </>
    )

}