import React from 'react'
import './Categorypage.css';
import Categoryitems from './Categoryitems';
import Categorylist from './Categorylist';

function Category_page() {
  return (
    <div>
      <div className="category_page">
        <div className="category_list">
            <Categorylist />
        </div>
        <div className="category_items">
            <Categoryitems />
        </div>
      </div>
    </div>
  )
}

export default Category_page