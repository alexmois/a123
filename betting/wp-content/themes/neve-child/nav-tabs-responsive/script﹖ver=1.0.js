( function ( $ ) {
  const statesDefinitions = {
    "AK" : "Alaska",
    "AL" : "Alabama",
    "AR" : "Arkansas",
    "AS" : "American Samoa",
    "AZ" : "Arizona",
    "CA" : "California",
    "CO" : "Colorado",
    "CT" : "Connecticut",
    "DC" : "District of Columbia",
    "DE" : "Delaware",
    "FL" : "Florida",
    "GA" : "Georgia",
    "GU" : "Guam",
    "HI" : "Hawaii",
    "IA" : "Iowa",
    "ID" : "Idaho",
    "IL" : "Illinois",
    "IN" : "Indiana",
    "KS" : "Kansas",
    "KY" : "Kentucky",
    "LA" : "Louisiana",
    "MA" : "Massachusetts",
    "MD" : "Maryland",
    "ME" : "Maine",
    "MI" : "Michigan",
    "MN" : "Minnesota",
    "MO" : "Missouri",
    "MS" : "Mississippi",
    "MT" : "Montana",
    "NC" : "North Carolina",
    "ND" : "North Dakota",
    "NE" : "Nebraska",
    "NH" : "New Hampshire",
    "NJ" : "New Jersey",
    "NM" : "New Mexico",
    "NV" : "Nevada",
    "NY" : "New York",
    "OH" : "Ohio",
    "OK" : "Oklahoma",
    "OR" : "Oregon",
    "PA" : "Pennsylvania",
    "PR" : "Puerto Rico",
    "RI" : "Rhode Island",
    "SC" : "South Carolina",
    "SD" : "South Dakota",
    "TN" : "Tennessee",
    "TX" : "Texas",
    "UT" : "Utah",
    "VA" : "Virginia",
    "VI" : "Virgin Islands",
    "VT" : "Vermont",
    "WA" : "Washington",
    "WI" : "Wisconsin",
    "WV" : "West Virginia",
    "WY" : "Wyoming"
  };

  $( document )
    .ready( function() {
      $( '.wpsm_nav.wpsm_nav-tabs' ).each( function() {
        const tabsElement = $( this );

        let dropdownElement = $( '<select class="dropdown_wpsm_nav"></select>' );

        tabsElement.children( 'li' ).each( function() {
          const tabElement    = $( this );
          const tabLink       = tabElement.children( 'a' );
          const tabText       = tabLink.text().trim().toUpperCase();

          let optionText = tabText;

          if ( tabText in statesDefinitions ) optionText = statesDefinitions[ tabText ];
          const optionElement = $( '<option value="' + tabLink.attr( 'aria-controls' )  + '">' + optionText + ' offers</option>' );

          dropdownElement.append( optionElement );
        } );

        tabsElement.before( dropdownElement );
      } );
    } )
    .on( 'change', '.dropdown_wpsm_nav', function() {
      const dropdownElement = $( this );
      const dropdownValue   = dropdownElement.val();

      dropdownElement.next( '.wpsm_nav.wpsm_nav-tabs' ).find( `a[aria-controls="${dropdownValue}"]` ).trigger( 'click' );
    } )
    .on( 'click', '.wpsm_nav.wpsm_nav-tabs li a', function() {
      const tabLink         = $( this );
      const tabsElement     = tabLink.closest( '.wpsm_nav.wpsm_nav-tabs' );
      const tabValue        = tabLink.attr( 'aria-controls' );
      const dropdownElement = tabsElement.prev( '.dropdown_wpsm_nav' );

      if ( dropdownElement.val() !== tabValue ) dropdownElement.val( tabValue );
    } );
} )( jQuery );
