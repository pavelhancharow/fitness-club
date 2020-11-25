const popupVisit = () => {
  const freeVisitForm = document.getElementById('free_visit_form');

  document.addEventListener('click', (e) => {
    if (e.target.closest('.free-visit > p')) {
      freeVisitForm.style.display = 'block';
    } else if (e.target.matches('.close_icon') || !e.target.closest('.form-content')) {
      freeVisitForm.style.display = 'none';
    }
  });
};

export default popupVisit;