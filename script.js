const activities = [
    { name: 'INTERACTIVE QUIZ w/ BOOTSTRAP', url: 'https://marchuesdae.github.io/Button-Interactive/', img: 'Capture1.JPG'},
    { name: 'INTERACTIVE QUIZ', url: 'https://marchuesdae.github.io/Interactive-Quiz/', img: 'Capture2.JPG' },
    { name: 'DIGITAL CLOCK', url: 'https://marchuesdae.github.io/Global-Timer/', img: 'Capture4.JPG'},
    { name: 'BMI CALCULATOR', url: 'https://marchuesdae.github.io/BMI-Calcu/', img: 'Capture5.JPG'},
    { name: 'BOOSTSTRAP HOME-PAGE', url: 'https://marchuesdae.github.io/BootS_Homepage/', img: 'Capture6.JPG'},
    { name: 'LOG-IN FORM', url: 'https://marchuesdae.github.io/Registration-Form-BootS/', img: 'Capture7.JPG'},
    { name: 'To-Do-List', url: 'https://marchuesdae.github.io/To-Do-List-BootS/', img: 'Capture9.JPG'},
];


const activitiesContainer = document.getElementById('activities');

activities.forEach(activity => {
    const activityCol = document.createElement('div');
    activityCol.className = 'col-md-3';

    const activityDiv = document.createElement('div');
    activityDiv.className = 'activity d-flex flex-column align-items-center';

    const activityImg = document.createElement('img');
    activityImg.src = activity.img;
    activityImg.alt = activity.name;

    const activityName = document.createElement('div');
    activityName.className = 'activity-name';
    activityName.textContent = activity.name;

    const activityButton = document.createElement('a');
    activityButton.className = 'btn btn-success';
    activityButton.href = activity.url;
    activityButton.textContent = 'Go to Site';

    activityDiv.appendChild(activityImg);
    activityDiv.appendChild(activityName);
    activityDiv.appendChild(activityButton);
    activityCol.appendChild(activityDiv);
    activitiesContainer.appendChild(activityCol);
});
