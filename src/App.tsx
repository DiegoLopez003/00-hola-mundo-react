import './App.css'
import { TwitterFollowCard } from './TwitterFollowCard'

export function App() {
    return (
        <section className="App">
        <TwitterFollowCard numPhoto="150" userName="dlopezhu" name="Diego Antonio Lopez Huaycho"/>
        <TwitterFollowCard numPhoto="130" userName="milagrosro" name="Maria de los Milagros Rocio"/>
        <TwitterFollowCard numPhoto="120" userName="jugabma" name="Juan Gabriel Machado"/>
        <TwitterFollowCard numPhoto="123" userName="estebanAgui" name="Esteban Aguirre"/>
        </section>
    )
}