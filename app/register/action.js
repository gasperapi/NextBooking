'use server'
export async function submitForm(formData) {
    // ใช้ Object.entries() เพื่อวนซ้ำผ่านทุกคู่ของ key และ value ในอ็อบเจกต์ userData
  Object.entries(formData).forEach(([key, value]) => {
    console.log(`${key}: ${value}`);
  });
  
}