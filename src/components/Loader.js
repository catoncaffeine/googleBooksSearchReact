export default function Loader(props) {
    if(!!props.loading) {
        return "loading...";
    }
    return null;
}