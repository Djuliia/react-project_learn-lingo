import React, { useEffect } from 'react';
import firebase from 'firebase';

export const TestTeacher = () => {
  useEffect(() => {
    const dataRef = firebase.database().ref();
    dataRef.on('value', snapshot => {
      console.log(snapshot.val());
    });
  }, []);

  return <div>TestTeacher</div>;
};
