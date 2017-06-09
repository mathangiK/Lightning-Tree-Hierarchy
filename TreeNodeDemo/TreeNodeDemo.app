<aura:application controller="ProductInfo" extends="force:slds" >
    <aura:attribute name="nodes" type="Object" />
    <aura:handler name="init" value="{!this}" action="{!c.init}" />
    <div class="slds-tree_container" role="application">
        <ul class="slds-tree" role="tree" aria-labelledby="treeheading" aria-activedescendant="tree0-node1">    	
        <aura:iteration items="{!v.nodes}" var="node">
        <c:TreeNode node="{!node}" />   
    	</aura:iteration>
        </ul>
    </div>
</aura:application>