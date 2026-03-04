// ==================== CONFIGURATION ====================
const STORAGE_KEY = 'rainbowStudents';
const MAX_IMAGE_SIZE = 1024 * 1024; // 1MB

// ==================== UTILITY FUNCTIONS ====================
const showToast = (message, type = 'success') => {
    const toast = document.getElementById('toast');
    if (!toast) return;
    
    toast.textContent = message;
    toast.className = `toast ${type} show`;
    
    setTimeout(() => {
        toast.classList.remove('show');
    }, 3000);
};

const getStudents = () => {
    try {
        return JSON.parse(localStorage.getItem(STORAGE_KEY)) || [];
    } catch (error) {
        console.error('Error reading from localStorage:', error);
        return [];
    }
};

const saveStudents = (students) => {
    try {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(students));
        return true;
    } catch (error) {
        console.error('Error saving to localStorage:', error);
        showToast('Failed to save data', 'error');
        return false;
    }
};

const validateEmail = (email) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
};

const validateMobile = (mobile) => {
    return /^\d{10}$/.test(mobile);
};

const formatDate = (dateString) => {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString(undefined, options);
};

const escapeHtml = (text) => {
    const div = document.createElement('div');
    div.textContent = text;
    return div.innerHTML;
};

const readImageAsBase64 = (file) => {
    return new Promise((resolve, reject) => {
        if (!file) {
            resolve(null);
            return;
        }
        
        if (file.size > MAX_IMAGE_SIZE) {
            reject(new Error('Image size must be less than 1MB'));
            return;
        }
        
        const reader = new FileReader();
        reader.onload = () => resolve(reader.result);
        reader.onerror = () => reject(new Error('Failed to read image'));
        reader.readAsDataURL(file);
    });
};

// ==================== MAIN FORM PAGE ====================
if (window.location.pathname.includes('index.html') || window.location.pathname === '/' || window.location.pathname.endsWith('/')) {
    document.addEventListener('DOMContentLoaded', initializeForm);
}

function initializeForm() {
    const form = document.getElementById('studentForm');
    const imageUpload = document.getElementById('studentImage');
    const imagePreview = document.getElementById('imagePreview');
    const resetBtn = document.querySelector('.btn-reset');

    if (form) {
        form.addEventListener('submit', handleFormSubmit);
    }

    if (imageUpload && imagePreview) {
        imageUpload.addEventListener('change', handleImagePreview);
        imagePreview.addEventListener('click', () => imageUpload.click());
        
        // Drag and drop
        imagePreview.addEventListener('dragover', (e) => {
            e.preventDefault();
            imagePreview.style.borderColor = 'var(--rainbow-2)';
        });
        
        imagePreview.addEventListener('dragleave', () => {
            imagePreview.style.borderColor = '';
        });
        
        imagePreview.addEventListener('drop', (e) => {
            e.preventDefault();
            imagePreview.style.borderColor = '';
            const file = e.dataTransfer.files[0];
            if (file && file.type.startsWith('image/')) {
                imageUpload.files = e.dataTransfer.files;
                handleImagePreview({ target: imageUpload });
            }
        });
    }

    if (resetBtn) {
        resetBtn.addEventListener('click', () => {
            if (imagePreview) {
                imagePreview.innerHTML = `
                    <i class="fas fa-cloud-upload-alt"></i>
                    <p>Click to upload or drag & drop</p>
                    <small>PNG, JPG up to 1MB</small>
                `;
            }
        });
    }
}

function handleImagePreview(event) {
    const file = event.target.files[0];
    const preview = document.getElementById('imagePreview');
    
    if (file && preview) {
        const reader = new FileReader();
        reader.onload = (e) => {
            preview.innerHTML = `
                <div class="has-image">
                    <img src="${e.target.result}" alt="Preview">
                    <small>Click to change</small>
                </div>
            `;
        };
        reader.readAsDataURL(file);
    }
}

async function handleFormSubmit(e) {
    e.preventDefault();
    
    // Clear previous errors
    document.querySelectorAll('.error-message').forEach(el => el.textContent = '');
    
    // Get form values
    const formData = {
        name: document.getElementById('name').value.trim(),
        fatherName: document.getElementById('fatherName').value.trim(),
        dob: document.getElementById('dob').value,
        gender: document.getElementById('gender').value,
        mobile: document.getElementById('mobile').value.trim(),
        email: document.getElementById('email').value.trim(),
        address: document.getElementById('address').value.trim(),
        image: document.getElementById('studentImage').files[0]
    };
    
    // Validation
    let isValid = true;
    
    if (!formData.name) {
        document.getElementById('nameError').textContent = 'Name is required';
        isValid = false;
    }
    
    if (!formData.fatherName)