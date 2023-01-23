import React from 'react'
import HeroVanilla from '../../components/HeroVanilla/HeroVanilla';
import ItemForm from "../../components/ItemForm/ItemForm";

function EditInvItemPage(props) {
    return (
        <div className="main">
            <HeroVanilla title={"Edit Inventory Item"} inventoryId={props.match.params.inventoryId}/>
            <ItemForm inventoryId={props.match.params.inventoryId}/>
        </div>
    )
}

export default EditInvItemPage
