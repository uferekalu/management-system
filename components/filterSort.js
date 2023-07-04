import Media from '@/utils/media';

export default function FilterSort(props) {
  const { mobile, tabletAndDesktop } = Media();
  return (
    <>
      <select
        style={{
          width: mobile ? '140px' : '120px',
          padding: '8px',
          border: '1px solid #E7E7E7',
          fontSize: '12px',
          borderRadius: '5px',
        }}
        // onChange={(event) => setVehicleType(event.target.value)}
      >
        <option value="">{props.caption}</option>
        {/* {vehicleTypes.map((data, idx) => (
                <option key={idx} value={data}>{data}</option>
              ))} */}
      </select>
    </>
  );
}
