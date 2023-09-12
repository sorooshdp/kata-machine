export default function linear_search(haystack: number[], needle: number): boolean {
    let target : boolean = false;
    for (let i = 0; i < haystack.length; i++) {
       if(haystack[i] === needle){
        target = true;
       } 
    }
    return target;
}