

export default function Input({ field, className, errors, placeholder, type }) {
    return (
        <>
            <label htmlFor={field.name} className='pb-1.5 font-medium capitalize text-8125 font-inter'>{field.name}</label>

            <div >
                <input
                    {...field}
                    className={className || 'input_primary'}
                    placeholder={placeholder}
                    type={type}
                />

            </div>
            {errors &&
                <p className="text-red-500">
                    {errors}
                </p>
            }
        </>
    )
}