const maxImageCount = "ALL_PHOTOS"; // Delete all photos or if you want to delete a specific number of photos, put a number value, like this: 2258

// Selector for Images and buttons
const selectors={
    xClass: '.ckGgle',
    deleteButton:'button[aria-label="Delete"]',
    confirmationButton: '#yDmH0d > div.llhEMd.iWO5td > div > div.g3VIld.V639qd.bvQPzd.oEOLpc.Up8vH.J9Nfi.A9Uzve.iWO5td > div.XfpsVe.J9fJmf > button.VfPpkd-LgbsSe.VfPpkd-LgbsSe-OWXEXe-k8QpJ.nCP5yc.kHssdc.HvOprf'
}

// Time Configuration (in milliseconds)
const timeConfig = {
    deleteCycle: 10000,
    pressButtonDelay: 2000
};

const maxRetries = 10;
let imageCount = 0;
let checkboxes;
let buttons = {
    deleteButton: null,
    confirmationButton: null
};

// Helper function to click the delete button
const clickDeleteButton = () => {
    try {
        buttons.deleteButton = document.querySelector(selectors.deleteButton);
        buttons.deleteButton.click();
    } catch {
        buttons.deleteButton = document.querySelector(selectors.languageAgnosticDeleteButton);
        buttons.deleteButton.click();
    }
};

// Main function for deleting images
const deleteImages = () => {
    checkboxes = document.querySelectorAll(selectors.checkboxClass);

    if (checkboxes.length <= 0) {
        console.log("[INFO] No more images to delete.");
        clearInterval(deleteTask);
        console.log("[SUCCESS] Tool exited.");
        return;
    }

    imageCount += checkboxes.length;

    checkboxes.forEach((checkbox) => checkbox.click());
    console.log(`[INFO] Deleting ${checkboxes.length} images`);

    setTimeout(() => {
        clickDeleteButton();

        setTimeout(() => {
            buttons.confirmationButton = document.querySelector(selectors.confirmationButton);
            buttons.confirmationButton.click();

            console.log(`[INFO] ${imageCount}/${maxImageCount} Deleted`);

            if (maxImageCount !== "ALL_PHOTOS" && imageCount >= parseInt(maxImageCount)) {
                console.log(`${imageCount} photos deleted as requested`);
                clearInterval(deleteTask);
                console.log("[SUCCESS] Tool exited.");
            }
        }, timeConfig.pressButtonDelay);
    }, timeConfig.pressButtonDelay);
};

// Main interval task
const deleteTask = setInterval(deleteImages, timeConfig.deleteCycle);
