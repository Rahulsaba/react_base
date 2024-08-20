import {  useEffect ,useLayoutEffect} from 'react'
export default function DocumentTitle(title) {
  useLayoutEffect(() => {
    document.title =`${title} :: JSR TRAVELS PVT LTD`
  }, [title]);
}

