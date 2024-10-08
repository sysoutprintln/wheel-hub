document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById('termsForm');
    const usageTerms = document.getElementById('usageTerms');
    const privacyTerms = document.getElementById('privacyTerms');
    const acceptTerms = document.getElementById('acceptTerms');
    const errorNotification = document.getElementById('error-notification');
    const successNotification = document.getElementById('success-notification');
    const errorMessage = errorNotification.querySelector('p');

    form.addEventListener('submit', function(event) {
        event.preventDefault();

        let errors = [];

        if (!usageTerms.checked) {
            errors.push('You must agree to the Terms of Use.');
        }

        if (!privacyTerms.checked) {
            errors.push('You must agree to the Privacy Notice.');
        }

        if (!acceptTerms.checked) {
            errors.push('You must accept the Terms & Conditions.');
        }

        if (errors.length > 0) {
            errorMessage.innerHTML = errors.join('<br>');
            showErrorNotification();
        } else {
            showSuccessNotification();
        }
    });

    acceptTerms.addEventListener('change', function() {
        if (acceptTerms.checked) {
            usageTerms.checked = true;
            privacyTerms.checked = true;
        }
    });

    usageTerms.addEventListener('change', function() {
        if (!usageTerms.checked) {
            acceptTerms.checked = false;
        }
    });

    privacyTerms.addEventListener('change', function() {
        if (!privacyTerms.checked) {
            acceptTerms.checked = false;
        }
    });
});

function submitForm() {
    const usageTerms = document.getElementById('usageTerms').checked;
    const privacyTerms = document.getElementById('privacyTerms').checked;
    const acceptTerms = document.getElementById('acceptTerms').checked;

    if (usageTerms && privacyTerms && acceptTerms) {
        showSuccessNotification();
    } else {
        let errors = [];
        if (!usageTerms) errors.push('You must agree to the Terms of Use.');
        if (!privacyTerms) errors.push('You must agree to the Privacy Notice.');
        if (!acceptTerms) errors.push('You must accept the Terms & Conditions.');
        
        const errorMessage = document.getElementById('error-notification').querySelector('p');
        errorMessage.innerHTML = errors.join('<br>');
        showErrorNotification();
    }
}

function showErrorNotification() {
    document.getElementById('error-notification').style.display = 'block';
}

function hideErrorNotification() {
    document.getElementById('error-notification').style.display = 'none';
}

function showSuccessNotification() {
    document.getElementById('success-notification').style.display = 'block';
}

function hideSuccessNotification() {
    document.getElementById('success-notification').style.display = 'none';
    window.location.href = 'register.html'; 
}
