import fr from "../../store/fr"



const First =({onClickBtn} )=>{

    const txt = fr.home.first

    return(
<section className="text-light bg-img bg-first-home">

<h2 className="text-5r  my-4">{txt.title} </h2>
<p className="fs-3 my-4">{txt.description} </p>

<div className="mt-4 pt-4">
    <i  onClick={()=> onClickBtn() } className="mt-4 arrw-Down bi bi-chevron-compact-down"> </i>

</div>
</section>

    )
}

export default First