import { usePathname } from 'next/navigation';
import { useEffect } from 'react';

export default function SidebarContent(props) {
  const pathName = usePathname();
  const { path, setClick } = props;

  useEffect(() => {
    if (pathName === path) {
      setClick(true);
    }
  }, [pathName, path, setClick]);
  return (
    <>
      <div
        onClick={props.handleClick}
        onMouseEnter={props.onMouseEnter}
        onMouseLeave={props.onMouseLeave}
        style={
          props.minimizeSidebar
            ? {
                marginTop: props.marginTop,
              }
            : {
                display: 'flex',
                marginTop: props.marginTop,
                border: '0.5px solid rgba(0, 0, 0, 0.04)',
                boxShadow:
                  '0px 3px 8px rgba(0, 0, 0, 0.12), 0px 3px 1px rgba(0, 0, 0, 0.04)',
                borderRadius: '5px',
                padding: '10px 20px',
                color: 'white',
                cursor: 'pointer',
                gap: '10px',
                background: props.toggleState
                  ? 'teal'
                  : props.isClicked && pathName === props.path
                  ? 'teal'
                  : undefined,
              }
        }
      >
        <i
          onMouseEnter={props.minimizeSidebar ? props.onMouseEnter : undefined}
          onMouseLeave={props.minimizeSidebar ? props.onMouseLeave : undefined}
          onClick={() => props.setMinimizeSidebar(false)}
          style={{
            color: 'white',
            cursor: 'pointer',
            background: props.toggleState
              ? 'teal'
              : props.isClicked && pathName === props.path
              ? 'teal'
              : undefined,
            padding:
              props.minimizeSidebar && props.toggleState
                ? '10px'
                : props.minimizeSidebar && pathName === props.path
                ? '10px'
                : undefined,
            marginLeft:
              (props.minimizeSidebar && props.toggleState) ||
              (props.minimizeSidebar && pathName === props.path)
                ? '-10px'
                : undefined,
            borderRadius:
              (props.minimizeSidebar && props.toggleState) ||
              (props.minimizeSidebar && pathName === props.path)
                ? '6px'
                : undefined,
          }}
          className={props.className}
        ></i>
        {!props.minimizeSidebar && props.caption}
      </div>
    </>
  );
}
