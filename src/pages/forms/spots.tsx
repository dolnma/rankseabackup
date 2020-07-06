import * as React from 'react'
import { Formik, FormikHelpers, FormikProps, Form, Field, FieldProps } from 'formik'
import { NextPage } from 'next'

interface MyFormValues {
    firstName: string
}

const Spots: NextPage<{}> = () => {
    const initialValues: MyFormValues = { firstName: '' }
    return (
        <div>
            <h1>My Example</h1>
            <Formik
                initialValues={initialValues}
                onSubmit={(values, actions) => {
                    console.log({ values, actions })
                    alert(JSON.stringify(values, null, 2))
                    actions.setSubmitting(false)
                }}
                render={(formikBag) => (
                    <Form>
                        <Field
                            name="firstName"
                            render={({ field, form, meta }) => (
                                <div>
                                    <input type="text" {...field} placeholder="First Name" />
                                    {meta.touched && meta.error && meta.error}
                                </div>
                            )}
                        />
                        <button type="submit">Submit</button>
                    </Form>
                )}
            />
        </div>
    )
}

export default Spots
