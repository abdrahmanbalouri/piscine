
export const getArchitects = () => {
    const peope = document.querySelectorAll('a','span')

    let archit = []
    let notarchit = []

    peope.forEach(element=>{

      if(element.tag == 'a'){

        archit.push(element)
      }else{


        notarchit.push(element)
      }




    })

    return [archit,notarchit]
};

export const getClassical = () => {
  const [architects] = getArchitects();
  const classical = [];
  const nonClassical = [];

  architects.forEach(el => {
    if (el.classList.contains('classical')) {
      classical.push(el);
    } else {
      nonClassical.push(el);
    }
  });

  return [classical, nonClassical];
};

export const getActive = () => {
  const [classical] = getClassical();
  const active = [];
  const inactive = [];

  classical.forEach(el => {
    if (el.classList.contains('active')) {
      active.push(el);
    } else {
      inactive.push(el);
    }
  });

  return [active, inactive];
};

export const getBonannoPisano = () => {
  const target = document.getElementById('BonannoPisano');
  const [activeClassical] = getActive();
  const remaining = activeClassical.filter(el => el.id !== 'BonannoPisano');

  return [target, remaining];
};
