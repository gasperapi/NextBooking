'use server'
import {addUser} from '@/lib/mongodb';
export async function submitForm(formData) {
    // ใช้ Object.entries() เพื่อวนซ้ำผ่านทุกคู่ของ key และ value ในอ็อบเจกต์ userData
  Object.entries(formData).forEach(([key, value]) => {
    console.log(`${key}: ${value}`);
  });
  addUser(formData).then(user => {
    console.log('Added user:', user);
  }).catch(error => {
    console.error('Error adding user:', error.message);
  });
}