try {
    let lastName = 'Yetayeh'
    let fullName = fistName + ' ' + lastName
  } catch (err) {
    console.log(err.name);
    console.log(err.message);
    
    
  } finally {
    console.log('In any case I will be executed')
  }