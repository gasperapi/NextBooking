'use server'
export async function submitForm(formData) {
    formData.forEach((value, key) => {
        console.log(`${key}: ${value}`);
    });
}