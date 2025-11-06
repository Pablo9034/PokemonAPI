import { For } from "solid-js";

export default function ShowFavorites() {
    const favorites = JSON.parse( localStorage.getItem('favorites') ?? '[]' ) as [{ id: number, name: string }];

    return (
        <For each={ favorites } fallback={ <div>LOADING...</div> }>
            {
                ({ id, name })=> (
                    <li>
                        <a href={ `/pokemon/${ name }` } class="flex flex-col items-center rounded-md hover:bg-gray-300/10">
                            <img
                                style={ `view-transition-name: pokemon-img-${ name }` }
                                src={ `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${ id }.png` } 
                                alt={ `Image about ${ name }'s pokemon` } 
                                class="size-16 lg:size-20"/>
                            <span class="capitalize text-xs lg:text-base">{ name }</span>           
                        </a>
                    </li>
                )
            }
        </For>
    );
}