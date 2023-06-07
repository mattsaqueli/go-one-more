import React from 'react'
import './Resources.css'

const Resources = () => {
  return (
    <article className='resources-container'>
      <h2>Mental Health Resources for Veterans</h2>
      <ul>
        <li>
          <a href="https://www.veteranscrisisline.net/Chat">Veterans Crisis Line:</a> Confidential hotline available 24/7 for immediate assistance in times of crisis. Call 1-800-273-8255 and Press 1, text 838255, or chat online.
        </li>
        <li>
          <a href="https://www.va.gov/mental-health">Department of Veterans Affairs (VA) Mental Health Services:</a> Comprehensive mental health services including counseling, group therapy, and specialized programs for PTSD and substance abuse treatment.
        </li>
        <li>
          <a href="https://www.giveanhour.org">Give an Hour:</a> Nonprofit organization providing free mental health services through a network of licensed professionals.
        </li>
        <li>
          <a href="https://www.nrd.gov">National Resource Directory (NRD):</a> Online database connecting veterans with various resources and support services, including mental health resources, employment assistance, and housing options.
        </li>
        <li>
          <a href="https://www.woundedwarriorproject.org">Wounded Warrior Project:</a> Offers programs and services supporting mental health and well-being, such as counseling, support groups, wellness programs, career counseling, and peer mentorship.
        </li>
      </ul>
      <p>
        Remember, this list is just a starting point. There are many more resources available to support your mental health and well-being as a veteran. Prioritize your mental health and explore additional options that align with your needs. You are not alone on this journey, and we are here to support you every step of the way.
      </p>
      <p>
        Please verify the availability and details of these resources through their respective websites or helpline numbers.
      </p>
    </article>
  );
};

export default Resources;

